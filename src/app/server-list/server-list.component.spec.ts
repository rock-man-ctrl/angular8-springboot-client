import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListComponent } from './server-list.component';

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ frameworkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
