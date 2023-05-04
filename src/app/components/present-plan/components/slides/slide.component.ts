import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  public slideOpts = {
    initialSlide: 0,
    speed: 100,
    autoplay: true,
  };
  public dataSlide: { title: string; icon: string }[] = [
    {
      title: 'Galeria de images',
      icon: 'images',
    },
    { title: 'Engajamento com facebook e instagram', icon: 'logo-instagram' },
    { title: 'Mapa com serviço de rota', icon: 'map' },
  ];
  constructor() {}

  ngOnInit() {}
}
