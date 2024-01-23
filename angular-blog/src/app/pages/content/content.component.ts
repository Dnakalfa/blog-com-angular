import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string="https://s1.kuantokusta.pt/img_upload/Repository/conteudos-seo/amazfit-gtr-4-black/AmazfitGTR3.jpg"
  contentTitle:string="Nova Interface GTR4"
  contentDescription:string="Amazfit GTR 4 smartwatch recebe atualização 3.17.0.2 com novas características de Importação e Navegação de Rotas."

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id")))
  }
}
