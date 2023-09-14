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

  movieList: Array<Movie> = [
    {
      name: 'Neethane En ponvasantam',
      poster:
        'https://miro.medium.com/v2/resize:fit:709/0*NA8wXPcv7kGeW-of.jpg',
      rating: 8.4,
      summary:
        'A boy and a girl who are friends from their childhood fight and break up during their school and college. They meet again at the age of 25 and fall in love. A boy and a girl who are friends from their childhood fight and break up during their school and college.',
    },
    {
      name: 'love Today',
      poster:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202210/Love-Today_1667220306.jpg',
      rating: 8.8,
      summary:
        'Two young lovers, who are made to exchange their phones for a day and what happens due to that. Two young lovers, who are made to exchange their phones for a day and what happens due to that. Two young lovers, who are made to exchange their phones for a day and what happens due to that.',
    },
    {
      name: 'Good night',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg',
      rating: 7,
      summary:
        'A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl. Follow how the couple overcome his sleeping problem while living together. A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl.',
    },
    {
      name: 'Viduthalai',
      poster:
        'https://i.redd.it/zrsd5xrae0ua1.jpg',
      rating: 8.1,
      summary:
        "Kumaresan (Soori), a newly joined police officer, is posted in a politically sensitive village where he is supposed to capture the leader of a separatist group, Perumal (Vijay). With time he learns tough way that the stories of valour and shining badges about the police force are not the same in reality.",
    },
    {
      name: 'DaDa',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDUzODNkMTYtN2UyMC00OWQ1LWJmMmEtZGFiNjRkZjdmMDE4XkEyXkFqcGdeQXVyMTA3MTI2ODc5._V1_.jpg',
      summary:
        "Dada focuses on the life of a young man, who later adores the role of fatherhood and as a single parent. It sends out a stronger message indicating that parenthood is gender neutral. It is also loosely based on true events of director Ganesh K. Babu's friend's life.",
      rating: 8.8,
    },
    {
      name: 'Jailer',
      rating: 8,
      summary:
        "Muthuvel Pandian (Rajinikanth) is a retired police officer who lives in Kodambakkam with his family. Muthuvel's son, ACP Arjun (Vasanth Ravi), is investigating Varman (Vinayakan), an eccentric gangster who smuggles idols of gods and sells them to buyers overseas, operating from his base of operations in Arakkonam.",
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzFkNmZkMTctYjRhMS00ODZiLWFlNjQtZmZmN2IzMDJlNmVkXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UX1000_.jpg',
    }

   
  ];
}

export { Movie, name, AppComponent };