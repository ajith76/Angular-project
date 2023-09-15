import { Component } from '@angular/core';

// named export
type Movie = {
  name: string;
  poster: string;
  rating: number;
  summary: string;
};

const name = (n: number) => n * 2;

type User = {
  name: string;
  img: string;
};

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
class AppComponent {
  title = 'nihilent-angular-movie-app';
  vamsi: User = {
    name: 'Vamsi',
    img: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp',
  };

  charan: User = {
    name: 'Charan',
    img: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  };

  jithu: User = {
    name: 'Jithu',
    img: 'https://cdn4.sharechat.com/img_742518_196c808e_1684472740214_sc.jpg?tenant=sc&referrer=tag-service&f=214_sc.jpg',
  };

  users: User[] = [
    {
      name: 'Vamsi',
      img: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp',
    },
    {
      name: 'Charan',
      img: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    {
      name: 'Jithu',
      img: 'https://cdn4.sharechat.com/img_742518_196c808e_1684472740214_sc.jpg?tenant=sc&referrer=tag-service&f=214_sc.jpg',
    },
  ];

  names: string[] = [
    'Nitheesh',
    'Prithivi',
    'Jithu',
    'Ajith',
    'Aravind',
    'Sudeesh',
  ];

}

export { Movie, name, AppComponent };