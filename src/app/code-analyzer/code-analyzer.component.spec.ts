import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAnalyzerComponent } from './code-analyzer.component';

describe('CodeAnalyzerComponent', () => {
  let component: CodeAnalyzerComponent;
  let fixture: ComponentFixture<CodeAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
