import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'All Might', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/0/0a/All_Might_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619041830', height: 220},
    {id: 11, name: 'Izuku Midoriya', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/25/Izuku_Midoriya_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050117', height: 166},
    {id: 12, name: 'Katsuki Bakugo', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Katsuki_Bakugo_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050033', height: 172},
    {id: 13, name: 'Ochako Uraraka', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/78/Ochaco_Uraraka_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044306', height: 156},
    {id: 14, name: 'Tenya Iida', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7d/Tenya_Iida_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044125', height: 179},
    {id: 15, name: 'Shoto Todoroki', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/57/Shouto_Todoroki_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619045658', height: 176},
    {id: 16, name: 'Yuga Aoyama ', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/a/ac/Yuuga_Aoyama_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619043516', height: 168},
    {id: 17, name: 'Tsuyu Asui', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Tsuyu_Asui_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619043915', height: 150},
    {id: 18, name: 'Momo Yaoyorozu', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Momo_Yaoyorozu_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050232', height: 173},
    {id: 19, name: 'Mezo Shoji', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/8b/Mezo_Shoji_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619045335', height: 170},
    {id: 20, name: 'Eijiro Kirishima', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d4/Eijirou_Kirishima_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044805', height: 187},
    {id: 21, name: 'Mina Ashido', pp:  'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/fd/Mina_Ashido_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619043731', height: 171},
    {id: 22, name: 'Minoru Mineta', pp: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/6/6a/Minoru_Mineta_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050156', height: 108}
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}