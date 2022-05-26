using Microsoft.EntityFrameworkCore;

namespace appAli.Models
{
    public class classContext : DbContext
    {
       public classContext(DbContextOption < classContext > options : base(options)){

       }
       DbSet<Produto> Produtos{get; set;}
    }
}