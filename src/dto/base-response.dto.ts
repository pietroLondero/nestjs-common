import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";

export class BaseResponseDto {
  @Expose()
  @ApiProperty()
  count: number;

  @Expose()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  page: number;

  @Expose()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  pageSize: number;

  @Expose()
  @ApiProperty()
  totalPages: number;
}