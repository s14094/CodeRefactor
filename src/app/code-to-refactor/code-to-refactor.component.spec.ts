import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CodeToRefactorComponent, Item} from './code-to-refactor.component';


describe('CodeToRefactorComponent', () => {
  let component: CodeToRefactorComponent;
  let fixture: ComponentFixture<CodeToRefactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeToRefactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeToRefactorComponent);
    component = fixture.componentInstance;
    console.log('asdasdasd', component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should foo', function() {
  //   const gildedRose = new CodeToRefactorComponent([ new Item('foo', 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual('fixme');
  // });
});
