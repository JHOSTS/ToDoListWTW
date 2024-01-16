using FavoritosApi.Data;
using FavoritosApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/favoritos", (AppDbContext _context) => {
    var filmesFavoritos = _context.FilmesFavoritos.ToList();

    return filmesFavoritos;
})
.WithName("GetFavoritos");

app.MapPost("/favoritar", async (AppDbContext _context) => {
    var filme = new Favoritos { FILME_ID = 123, DTINSERSAO = DateTime.Now };

    _context.FilmesFavoritos.Add(filme);
    await _context.SaveChangesAsync();

    return Results.Ok();
});

app.Run();