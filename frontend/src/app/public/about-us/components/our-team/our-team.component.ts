import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.sass']
})
export class OurTeamComponent implements OnInit {

  aboutUs = 'Con el objetivo de que cada recital sea una verdadera celebración, en Delorean Zeta a través de Julio, Guille y Jero decidimos forjar a partir de la música, un canal de tránsito de expresión para todas esas melodias y ritmos que marcaron nuestra vida a traves de las peliculas y los anime mas legendarios de nuestra historia. Desde el corazón de la zona oeste de Buenos Aires, logramos expandirnos mas allá de las fronteras entregando nuestro arte en diversas presentaciones y ciudades de argentina y uruguay, transportando a nuestro público a cada etapa nostalgica de sus propios recuerdos acompañando cada armonía interpretada con emociones, sensaciones y esa sonrisa inevitable que produce escuchar aquella cancion que nos hizo vivir momentos unicos en la niñez, adolescencia, juventud y en la actualidad tambien. Desde nuestra concepción como banda, Delorean Zeta ha cosechado un publico que conforma su propio fandom, posicionandonos como la banda predilecta para cada evento o reunión donde se nos convoca. El crecimiento ha sido a pasos agigantados desde nuestra primera presentación hace solo dos años, y el futuro es mas que prometedor con propuestas que cada dia se superan y se renuevan mientras nuestro propio fandom no para de crecer. Las ideas son infinitas y las ganas de viajar en el tiempo no se agotan nunca, porque sabemos perfectamente que a donde vamos no necesitamos caminos...'

  constructor() { }

  ngOnInit(): void {
  }

}
