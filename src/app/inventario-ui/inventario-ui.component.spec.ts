import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioUiComponent } from './inventario-ui.component';

describe('InventarioUiComponent', () => {
  let component: InventarioUiComponent;
  let fixture: ComponentFixture<InventarioUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
