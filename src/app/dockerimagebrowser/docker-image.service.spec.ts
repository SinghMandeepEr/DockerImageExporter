import { TestBed } from '@angular/core/testing';

import { DockerImageService } from './docker-image.service';

describe('DockerImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DockerImageService = TestBed.get(DockerImageService);
    expect(service).toBeTruthy();
  });
});
