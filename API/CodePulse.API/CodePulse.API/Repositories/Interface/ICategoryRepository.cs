namespace CodePulse.API.Repositories.Interface;
using CodePulse.API.Models.Domain;

public interface ICategoryRepository{
    Task<Category> CreateAsync(Category category);
}