import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper {
    static mapGiphyItemToGif(gItem: GiphyItem): Gif {
        // Implement mapping logic here
        // Example:
        return {
            id: gItem.id,
            title: gItem.title,
            url: gItem.images?.original?.url
        };    
    }

    static mapGiphyItemsToGifsArray(items: GiphyItem[]): Gif[] {
        return items.map(item => this.mapGiphyItemToGif(item));
    }
}