using Microsoft.AspNetCore.Mvc;
using Microondas.Application.DTOs;
using Microondas.Application.Services;

namespace Microondas.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MicroondasController : ControllerBase
{
    private readonly MicroondasService _service;

    public MicroondasController()
    {
        _service = new MicroondasService(); // injeção de dependência
    }

    [HttpPost("Iniciar")]
    public IActionResult Iniciar([FromBody] IniciarAquecimentoRequest request)
    {
        try
        {
            var result = _service.IniciarAquecimento(request);
            return Ok(new { result.Progresso });
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { Erro = ex.Message });
        }
    }
}
