import { Component } from "@angular/core"

@Component({
    selector: 'app-post4',
    template: `
        <div class="post4">
            <h1>Post title!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore.</p>
        </div>
    `,
    styles: [`
        .post4 {
            padding: .5rem;
            border: 2px solid black;
        }
    h1 {
        font-size: 1rem;
    }
    `]
})

export class Post4Component {

}