using BowlingLeagueMission10.DTOs;

namespace BowlingLeagueMission10.Data
{
    public interface iBowlingRepository // This is the interface
    {
        // Bowlers property
        IEnumerable<BowlerInfo> Bowlers { get; }

        // Teams property
        IEnumerable<BowlingTeam> Teams { get; }

        IEnumerable<BowlerTeamDto> GetBowlerTeamInfoByTeamName(string[] teamNames);
    }
}
