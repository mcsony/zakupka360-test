import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZkHeaderComponent } from './zk-header.component';

describe('ZkHeaderComponent', () => {
  let component: ZkHeaderComponent;
  let fixture: ComponentFixture<ZkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
