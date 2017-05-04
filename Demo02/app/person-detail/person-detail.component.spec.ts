import { PersonDetailComponent } from './person-detail.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe("Person Detail Component", () => {
    let comp: PersonDetailComponent;
    let fixture: ComponentFixture<PersonDetailComponent>;

    // beforeEach(() => {
    //     comp = new PersonDetailComponent();
    // });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PersonDetailComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonDetailComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should have a title", () => {
        expect(comp.title).toBe("JavaLounge");
    })

    it("should render the title correctly", async(() => {
        expect(fixture.nativeElement.querySelector("h2").innerHTML).toBe("PersonDetail: ");

        comp.person = {
            id: 1,
            firstname: "Thomas"
        };

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector("h2").innerHTML).toBe("PersonDetail: Thomas");
        });
    }));
});