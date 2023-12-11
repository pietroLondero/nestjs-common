import { Repository, FindOptionsWhere, ILike } from "typeorm";
import { GenericFilterDto } from "../dto";
import { SortOrder } from '../enums';

export class PaginationService {
  protected createOrderQuery(filter: GenericFilterDto) {
    const order: any = {};

    if (filter.orderBy) {
      order[filter.orderBy] = filter.sortOrder;
      return order;
    }

    order.createdAt = SortOrder.DESC;
    return order;
  }

  protected async paginate<T>(
    repository: Repository<T>,
    filter: GenericFilterDto,
    where: FindOptionsWhere<T>,
  ) {
    const [data, count] = await repository.findAndCount({
      order: this.createOrderQuery(filter),
      skip: (filter.page - 1) * (filter.pageSize + 1),
      take: filter.pageSize,
      where: where,
    });

    return {
      data,
      count,
      page: filter.page,
      pageSize: filter.pageSize,
      totalPages: Math.ceil(count / filter.pageSize),
    }
  }
  // che palle.
  protected createWhereQuery(params: any) {
    const where: any = {};

    if (params.name) {
      where.name = ILike(`%${params.name}%`);
    }

    if (params.age) {
      where.age = params.age;
    }
    return where;
  }

}