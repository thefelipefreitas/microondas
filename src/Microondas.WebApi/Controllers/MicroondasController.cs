using Microsoft.AspNetCore.Mvc;
using Microondas.Application.DTOs;

namespace Microondas.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MicroondasController : ControllerBase
{
    private readonly IMicroondasService _service;

    public MicroondasController(IMicroondasService service)
    {
        _service = service;
    }

    [HttpPost("Iniciar")]
    public IActionResult Iniciar([FromBody] IniciarAquecimentoRequest request)
    {
        try
        {
            var result = _service.IniciarAquecimento(request);
            return Ok(new { result.TempoSegundos, result.Potencia, result.Progresso });
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { Erro = ex.Message });
        }
    }
}
