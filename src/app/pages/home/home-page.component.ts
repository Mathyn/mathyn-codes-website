import { Component } from '@angular/core';
import { ShortIntroComponent } from '../../components/short-intro/short-intro.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    imports: [
        ShortIntroComponent,
        SkillsComponent
    ]
})
export default class HomePageComponent {
    
}