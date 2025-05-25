namespace Microondas.Domain.Entities;

public class Microondas
{
    public string Nome { get; set; } = string.Empty;
    public string Alimento { get; set; } = string.Empty;
    public int TempoSegundos { get; set; }
    public int Potencia { get; set; } = 10;
    public char CaractereAquecimento { get; set; }
    public string? Instrucoes { get; set; }
    public bool IsPredefinido { get; set; }
    public bool IsCustomizado => !IsPredefinido;
}
