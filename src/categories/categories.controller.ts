import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/categorie.dto';

@Controller('categories')
export class CategoriesController {
    
    constructor(private categoryService:CategoriesService){}

    @Post()
    postCategory(@Body() category:CategoryDto):Promise<CategoryDto>{
        return this.categoryService.postCategory(category)
    }
}
