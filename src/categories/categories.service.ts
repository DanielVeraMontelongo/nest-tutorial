import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/categorie.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>){}

    postCategory(category:CategoryDto):Promise<CategoryDto>{
        let newCategory = this.categoryRepository.create(category)
        return this.categoryRepository.save(newCategory);
    }
}
