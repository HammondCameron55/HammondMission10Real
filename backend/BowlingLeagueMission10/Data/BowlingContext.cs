using Microsoft.EntityFrameworkCore;

namespace BowlingLeagueMission10.Data
{
    public class BowlingLeagueContext : DbContext
    {
        public DbSet<BowlingTeam> Teams { get; set; }
        public DbSet<BowlerInfo> Bowlers { get; set; }

        public BowlingLeagueContext(DbContextOptions<BowlingLeagueContext> options)
                    : base(options)
        {
        }
    }
}
