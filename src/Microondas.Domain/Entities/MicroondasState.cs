namespace Microondas.Domain.Entities;

public class MicroondasState
{
    public int TempoSegundos { get; set; }
    public int Potencia { get; set; } = 10;
    public string Progresso { get; private set; } = string.Empty;

    public void IniciarAquecimento()
    {
        Progresso = string.Empty;
        for (int i = 0; i < TempoSegundos; i++)
        {
            Progresso += new string('.', Potencia) + " ";
        }

        Progresso += "Aquecimento concluído.";
    }
}
