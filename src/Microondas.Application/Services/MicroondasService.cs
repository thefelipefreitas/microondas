using Microondas.Application.DTOs;
using Microondas.Domain.Entities;

namespace Microondas.Application.Services;

public class MicroondasService : IMicroondasService
{
    public MicroondasState IniciarAquecimento(IniciarAquecimentoRequest request)
    {
        int tempo = request.TempoSegundos ?? 30;
        int potencia = request.Potencia ?? 10;

        if (tempo < 1 || tempo > 120)
            throw new ArgumentException("Tempo deve estar entre 1 e 120 segundos.");
        if (potencia < 1 || potencia > 10)
            throw new ArgumentException("Potência deve estar entre 1 e 10.");

        var estado = new MicroondasState
        {
            TempoSegundos = tempo,
            Potencia = potencia
        };

        estado.IniciarAquecimento();
        return estado;
    }
}
