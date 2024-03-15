using BowlingLeagueMission10.DTOs;

namespace BowlingLeagueMission10.Data
{
    public class EFBowlingRepository : iBowlingRepository
    {
        private BowlingLeagueContext _bowlingContext;

        public EFBowlingRepository(BowlingLeagueContext context)
        {
            _bowlingContext = context;
        }

        
        public IEnumerable<BowlerInfo> Bowlers => _bowlingContext.Bowlers;
    
        public IEnumerable<BowlingTeam> Teams => _bowlingContext.Teams;
    
        public IEnumerable<BowlerTeamDto> GetBowlerTeamInfoByTeamName(string[] teamNames)
        {
           return _bowlingContext.Bowlers
                .Where(b => teamNames.Contains(b.Team.TeamName)) // This is the navigation property
                .Select(b => new BowlerTeamDto
                {
                    BowlerFirstName = b.BowlerFirstName,
                    BowlerMiddleInit = b.BowlerMiddleInit,
                    BowlerLastName = b.BowlerLastName,
                    BowlerAddress = b.BowlerAddress,
                    BowlerCity = b.BowlerCity,
                    BowlerState = b.BowlerState,
                    BowlerZip = b.BowlerZip,
                    BowlerPhoneNumber = b.BowlerPhoneNumber,

                    TeamName = b.Team.TeamName
                }).ToList();
        }   
    }   
}
