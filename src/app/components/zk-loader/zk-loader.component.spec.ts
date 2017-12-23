import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZkLoaderComponent } from './zk-loader.component';

describe('ZkLoaderComponent', () => {
  let component: ZkLoaderComponent;
  let fixture: ComponentFixture<ZkLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZkLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZkLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
