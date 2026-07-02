import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: 'This is a simple example text but a bit longer',
    },
    {
      id: randomUUID(),
      name: 'Quentin Tarantino',
      description: 'This is a simple example text',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }
}
