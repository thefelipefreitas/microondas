using Microondas.Application.DTOs;
using Microondas.Domain.Entities;

public interface IMicroondasService
{
    /// <summary>
    /// Inicia o aquecimento do microondas com os parâmetros especificados.
    /// </summary>
    /// <param name="request">Objeto contendo os parâmetros de aquecimento.</param>
    /// <returns>Estado do microondas após iniciar o aquecimento.</returns>
    MicroondasState IniciarAquecimento(IniciarAquecimentoRequest request);
}