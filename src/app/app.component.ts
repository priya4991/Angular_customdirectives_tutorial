import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [{
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'At the bar',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Hiking',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }, {
    title: 'Traveling',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }];

  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;   // Math.abs doesnt exist in the template
  }
}
