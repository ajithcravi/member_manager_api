import { MemberProperty, database } from '@member-manager-api/database';
import { MemberPropertyCreationAttributes } from '@member-manager-api/type';

export class MemberPropertyService {
  private _repo = database.getRepository(MemberProperty);

  createMemberProperty(
    input: MemberPropertyCreationAttributes
  ): Promise<[MemberProperty, boolean | null]> {
    return this._repo.upsert(input);
  }
}
