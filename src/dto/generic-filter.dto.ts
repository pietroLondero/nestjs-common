import { Expose, Transform } from "class-transformer";
import { IsNumber, IsOptional, IsEnum } from "class-validator";
import { SortOrder } from "./../enums";
import { ApiProperty } from "@nestjs/swagger";


export class GenericFilterDto {
    @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
    @IsNumber({}, { message: ' "page" atrribute should be a number' })
    @Expose()
    @ApiProperty()
    public page: number;

    @Transform(({ value }) => toNumber(value, { default: 10, min: 1 }))
    @IsNumber({}, { message: ' "pageSize" attribute should be a number ' })
    @Expose()
    @ApiProperty()
    public pageSize: number;

    @IsOptional()
    @Expose()
    @ApiProperty()
    public orderBy?: string;

    @IsEnum(SortOrder)
    @IsOptional()
    @Expose()
    @ApiProperty()
    public sortOrder?: SortOrder
}

function toNumber(value: any, options: { default: number; min: number }): number {
    const { default: defaultValue, min } = options;
    const parsedValue = parseInt(value, 10);
    return isNaN(parsedValue) || parsedValue < min ? defaultValue : parsedValue;
}