import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
    test('Create the component', async () => {
        await render(AppComponent);
    });
});
