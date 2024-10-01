import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { DOCS_SEARCH } from 'src/app/constants/components.constants';

const dataSearch = DOCS_SEARCH;
const dataSearchTitles = dataSearch.map((doc) => doc.title);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private router: Router) {}

  processAccentTitle = (title: string): string => {
    const accentMap: { [key: string]: string } = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
    };
    const titleWithoutAccents = title.replace(
      /[áéíóú]/g,
      (match) => accentMap[match] || match
    );
    return titleWithoutAccents;
  };
  model: any;

  @ViewChild('instance', { static: true }) instance?: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  handleSearch(): void {
    if (this.model && typeof this.model === 'string') {
      const selectedDoc = DOCS_SEARCH.find((doc) =>
        this.processAccentTitle(doc.title.toLowerCase()).includes(
          this.processAccentTitle(this.model.toLowerCase())
        )
      );

      if (selectedDoc) {
        this.router.navigate([selectedDoc.route]);
        this.model = '';
      }
    }
  }

  noResults: boolean = false;

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance?.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) => {
        const normalizedTerm = this.processAccentTitle(term);

        const filteredTitles = dataSearchTitles.filter(
          (v) =>
            this.processAccentTitle(v)
              .toLowerCase()
              .indexOf(normalizedTerm.toLowerCase()) > -1
        );

        if (filteredTitles.length === 0) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
        return filteredTitles;
      })
    );
  };
}
