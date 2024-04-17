using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostRepository blogPostRepository;
        public BlogPostsController(IBlogPostRepository blogPostRepository) {
            this.blogPostRepository = blogPostRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreatBlogPost(CreateBlogPostRequestDto request)
        {
            var blogPost = new BlogPost
            {
                Title = request.Title,
                ShortDescription = request.ShortDescription,
                Author = request.Author,
                Content = request.Content,
                FeaturedImageUrl = request.FeaturedImageUrl,
                PublishedDate = request.PublishedDate,
                UrlHandle = request.UrlHandle,
                IsVisible = request.IsVisible,
            };

            blogPost = await blogPostRepository.CreateAsync(blogPost);

            var response = new BlogPostDto{
                Id = blogPost.Id,
                Title = blogPost.Title,
                ShortDescription = blogPost.ShortDescription,
                Author = blogPost.Author,  
                Content = blogPost.Content,
                PublishedDate = blogPost.PublishedDate,
                UrlHandle = blogPost.UrlHandle,
                IsVisible = blogPost.IsVisible,
                FeaturedImageUrl = blogPost.FeaturedImageUrl
            };

            return Ok(response);
        }
    }
}
