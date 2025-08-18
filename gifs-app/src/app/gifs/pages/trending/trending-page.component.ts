import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';
@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit { 
  // gifs = signal(imageUrls);  
  gifService = inject(GifService);
  scrollService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit() {    
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    scrollDiv.scrollTop = this.scrollService.trendingScrollPosition();
    // scrollDiv.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHight = scrollDiv.clientHeight;
    const scrollHight = scrollDiv.scrollHeight;
    
    // console.log({scrollTop, clientHight, scrollHight}); 
    const bottomReached = scrollTop + clientHight + 200 >= scrollHight - 10;
    // console.log({bottomReached});

    this.scrollService.trendingScrollPosition.set(scrollTop);

    if (bottomReached) {
      console.log("llegamos al final y cargamos más gifs");
      this.gifService.loadTrendingGifs();
    }

  }
}
