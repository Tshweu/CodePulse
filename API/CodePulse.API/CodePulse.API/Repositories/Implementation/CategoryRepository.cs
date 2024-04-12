namespace CodePulse.API.Repositories.Implementation;

using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Repositories.Interface;
public class CategoryRepository: ICategoryRepository{
    private readonly ApplicationDbContext dbContext;
    CategoryRepository(ApplicationDbContext dbContext){
        this.dbContext = dbContext;
    }
    public async Task<Category> CreateAsync(Category category){
        await dbContext.Categories.AddAsync(category);
        await dbContext.SaveChangesAsync();
        return category;
    }
}