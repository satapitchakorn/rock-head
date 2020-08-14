import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Check Valid forms 
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }

}
