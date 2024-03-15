using BowlingLeagueMission10.Data;
using BowlingLeagueMission10.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingLeagueMission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private iBowlingRepository _bowlingRepository; // This is the interface
        
        public BowlingLeagueController(iBowlingRepository bowlingRepository)
        {
            _bowlingRepository = bowlingRepository;
        }

        [HttpGet("GetBowlerTeamInfo")]
        public IActionResult GetBowlerTeamInfo()
        {
            string[] teamNames = new string[] { "Marlins", "Sharks" };
            var results = _bowlingRepository.GetBowlerTeamInfoByTeamName(teamNames);
            return Ok(results);
        }

    }
}
