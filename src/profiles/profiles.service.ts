import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

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

  create(body: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...body,
    };
    this.profiles.push(newProfile);

    return newProfile;
  }

  delete(id: string) {
    const matchingIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingIndex !== -1) {
      this.profiles.splice(matchingIndex, 1);
    }
  }
}
