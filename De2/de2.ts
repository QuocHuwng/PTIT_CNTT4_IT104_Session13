class Audience {
    private static nextID = 1;
    id: number;
    name: string;
    email: string;
    phone: number
    constructor( name: string, email: string, phone: number) {
        this.id = Audience.nextID++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(): void{
        
    }
}
abstract class Movie{
    private static nextId = 1;
    id: number;
    title: string;
    genre: string;
    tickerPrice: number;
    isShowing: boolean;
    constructor(title: string, genre: string, tickerPrice: number, isShowing: boolean) {
        this.id = Movie.nextId++;
        this.title = title;
        this.genre = genre;
        this.tickerPrice = tickerPrice;
        this.isShowing = false;
    }
    startShow(): void{
        
    }
    stopShow(): void{

    }
    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}
class ActionMovie extends Movie{
    constructor()
}