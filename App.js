import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  CalendarDays, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  Bell, 
  Dumbbell, 
  ChevronDown, 
  Clock, 
  House, 
  ChevronRight, 
  Volleyball, 
  Contact, 
  ChevronsUpDown,
  ArrowRight,
  Plus,
  MonitorCheck,
  CheckCircle2,
  Clock4,
  Search,
  Send,
  Download,
  FileSearch
} from 'lucide-react';

const App = () => {
  const [currentModule, setCurrentModule] = useState('fixtures-list'); // 'fixtures-list', 'fixtures-create', or 'sns'
  const [activeStep, setActiveStep] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [snsFilter, setSnsFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const steps = [
    { id: 1, title: 'Fixture Details', subtitle: 'Step 1' },
    { id: 2, title: 'Team Selection', subtitle: 'Step 2 (Optional)' },
    { id: 3, title: 'Supporters', subtitle: 'Step 3 (Optional)' },
    { id: 4, title: 'Review', subtitle: 'Step 4' },
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: <LayoutDashboard className="h-5 w-5 mr-2" />, label: 'Dashboard' },
    { id: 'sports', icon: <Volleyball className="h-5 w-5 mr-2" />, label: 'Sports' },
    { id: 'teams', icon: <Users className="h-5 w-5 mr-2" />, label: 'Teams' },
    { id: 'fixtures', icon: <Trophy className="h-5 w-5 mr-2" />, label: 'Fixtures' },
    { id: 'trainings', icon: <Dumbbell className="h-5 w-5 mr-2" />, label: 'Trainings' },
    { id: 'sns', icon: <MonitorCheck className="h-5 w-5 mr-2" />, label: 'Supervision and Substitution' },
    { id: 'calendar', icon: <CalendarDays className="h-5 w-5 mr-2" />, label: 'Calendar' },
    { id: 'pn-templates', icon: <Bell className="h-5 w-5 mr-2" />, label: 'PN Templates' },
    { id: 'coaches', icon: <Contact className="h-5 w-5 mr-2" />, label: 'Our Coaches' },
    { id: 'settings', icon: <Settings className="h-5 w-5 mr-2" />, label: 'Settings' },
  ];

  const teamCoaches = ["James", "Emma", "Sunny", "Lee"];
  const otherStaff = ["Bill", "Declan", "George"];

  const snsData = [
    { date: "08/01/2026", from: "08:30", to: "14:30", staff: "Sunny", fixture: "Under 16 GAA", approve: "YES", snsDone: "No" },
    { date: "08/01/2026", from: "08:30", to: "14:30", staff: "Lee", fixture: "Under 16 GAA", approve: "YES", snsDone: "YES" },
    { date: "08/01/2026", from: "08:30", to: "14:30", staff: "James", fixture: "Under 16 GAA", approve: "YES", snsDone: "YES" },
    { date: "08/01/2026", from: "08:30", to: "14:30", staff: "Emma", fixture: "Under 16 GAA", approve: "YES", snsDone: "YES" },
  ];

  const handleSidebarClick = (id) => {
    if (id === 'sns') setCurrentModule('sns');
    else if (id === 'fixtures') setCurrentModule('fixtures-list');
    else setCurrentModule(id);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-primary/20">
      
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-[260px]'} bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out z-10 shrink-0 h-full`}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 mt-8 flex items-center justify-between min-h-[72px] max-h-[72px] shrink-0">
            <div className="flex items-center space-x-2.5 cursor-pointer">
              <img 
                alt="School Logo" 
                width="40" 
                height="40" 
                className="rounded-md shrink-0" 
                src="https://d7jqfxg6hzhg0.cloudfront.net/dev-school-images-1-787432d6-a1a1-4308-8f99-aff38ef63373/resized/6999_20250701150735.png" 
              />
              {!isSidebarCollapsed && (
                <h1 className="sidebar-title text-xl font-semibold tracking-tight break-words max-h-22 overflow-hidden">
                  Unique Senior College
                </h1>
              )}
            </div>
          </div>

          <div className="px-4 shrink-0">
            <div className="bg-border shrink-0 h-px w-full mt-4"></div>
          </div>

          <nav className="mt-6 px-4 overflow-y-auto flex-grow scrollbar-none">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSidebarClick(item.id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 h-9 w-full justify-start px-4 py-2 mb-1 text-left cursor-pointer outline-none ${
                  (currentModule.startsWith('fixtures') && item.id === 'fixtures') || currentModule === item.id 
                  ? 'bg-muted text-primary font-semibold shadow-none' 
                  : 'text-primary hover:bg-muted font-medium'
                } ${isSidebarCollapsed ? 'sm:justify-center' : ''}`}
              >
                {item.icon}
                {!isSidebarCollapsed && <span className="block sm:block truncate">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="px-4 pb-6 space-y-1 shrink-0">
          <div className="h-px bg-border mx-0 mb-4" />
          <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium h-9 w-full justify-start px-4 py-2 text-destructive hover:bg-destructive/10 transition-colors cursor-pointer outline-none">
            <LogOut size={18} />
            {!isSidebarCollapsed && <span className="text-[14px]">Log Out</span>}
          </button>
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium h-9 w-full justify-start px-4 py-2 text-muted-foreground hover:bg-muted transition-colors cursor-pointer outline-none"
          >
            <ChevronLeft size={18} className={`${isSidebarCollapsed ? 'rotate-180' : ''} transition-transform`} />
            {!isSidebarCollapsed && <span className="text-[14px]">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-muted/50 h-full">
        <div className="w-full px-6 py-6 md:px-8 md:py-8">
          
          {/* MODULE: Fixtures Management (List View) */}
          {currentModule === 'fixtures-list' && (
            <div className="animate-in fade-in duration-300">
              <div className="relative mb-6">
                <div className="relative space-y-2">
                  <div className="flex items-center justify-between gap-4 pt-3">
                    <h1 className="text-2xl font-bold tracking-tight">Fixtures Management</h1>
                    <div className="flex items-center gap-4">
                      <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input className="h-9 w-64 pl-9 pr-8 rounded-md border bg-background text-sm outline-none" placeholder="Search students..." />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground border px-1 rounded bg-muted/50">/</span>
                      </div>
                      <div className="h-10 w-10 border-2 border-background rounded-full bg-primary/10 flex items-center justify-center font-medium text-sm text-primary">KW</div>
                    </div>
                  </div>
                  <nav aria-label="Breadcrumbs" className="flex items-center text-sm border-b border-border/40 pb-2">
                    <House className="h-3.5 w-3.5 text-muted-foreground" />
                    <ChevronRight className="h-3.5 w-3.5 mx-1 text-muted-foreground/40" />
                    <span className="text-muted-foreground font-medium">Fixtures</span>
                  </nav>
                </div>
              </div>

              {/* No Fixtures Found Card */}
              <div className="bg-card rounded-xl border py-16 mb-6 flex flex-col items-center justify-center text-center">
                <div className="bg-muted/50 p-4 rounded-full mb-4">
                  <Trophy size={48} className="text-muted-foreground opacity-20" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground">No fixtures found</h3>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input className="h-9 w-64 pl-9 rounded-md border bg-background text-sm outline-none" placeholder="Search teams..." />
                  </div>
                  <button className="h-9 px-3 border rounded-md text-sm flex items-center gap-2 bg-background hover:bg-muted">
                    All Dates <ChevronDown size={14} className="opacity-50" />
                  </button>
                  <button className="h-9 px-3 border rounded-md text-sm flex items-center gap-2 bg-background hover:bg-muted">
                    Status <ChevronDown size={14} className="opacity-50" />
                  </button>
                  <button className="h-9 px-3 border rounded-md text-sm flex items-center gap-2 bg-background hover:bg-muted">
                    Result <ChevronDown size={14} className="opacity-50" />
                  </button>
                  <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 rounded border-border" defaultChecked />
                    Show my fixtures
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentModule('fixtures-create')}
                    className="h-9 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90"
                  >
                    <Plus size={16} /> Add Fixture
                  </button>
                  <button className="h-9 px-4 border rounded-md text-sm font-medium flex items-center gap-2 bg-background hover:bg-muted">
                    <Send size={14} /> Send PN
                  </button>
                  <button className="h-9 w-9 border rounded-md flex items-center justify-center hover:bg-muted">
                    <Download size={16} />
                  </button>
                </div>
              </div>

              {/* Bottom Matching Criteria Card */}
              <div className="bg-card rounded-xl border py-24 flex flex-col items-center justify-center text-center">
                <div className="bg-muted/50 p-6 rounded-full mb-4">
                  <FileSearch size={40} className="text-muted-foreground opacity-20" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">No fixtures found matching your criteria</p>
              </div>
            </div>
          )}

          {/* MODULE: Create New Fixture Form */}
          {currentModule === 'fixtures-create' && (
            <div className="animate-in fade-in duration-300">
              <div className="relative mb-6">
                <div className="relative space-y-2">
                  <div className="flex items-center justify-between gap-4 pt-3">
                    <h1 className="text-2xl font-bold tracking-tight">
                      <span className="bg-primary bg-clip-text text-transparent">Create New Fixture</span>
                    </h1>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setCurrentModule('fixtures-list')}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent h-9 px-4 py-2 cursor-pointer outline-none"
                      >
                        Cancel
                      </button>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-background shadow-sm bg-primary/10 text-primary items-center justify-center font-medium uppercase">KW</span>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Breadcrumbs" className="flex items-center text-sm border-b border-border/40 pb-2">
                    <House className="h-3.5 w-3.5 text-muted-foreground cursor-pointer" onClick={() => setCurrentModule('dashboard')} />
                    <ChevronRight className="h-3.5 w-3.5 mx-1 text-muted-foreground/40" />
                    <span className="text-muted-foreground cursor-pointer hover:text-primary" onClick={() => setCurrentModule('fixtures-list')}>Fixtures</span>
                    <ChevronRight className="h-3.5 w-3.5 mx-1 text-muted-foreground/40" />
                    <span className="text-foreground font-medium">Create Fixture</span>
                  </nav>
                </div>
              </div>

              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border/60 py-6 shadow-none">
                <div className="p-2 sm:p-4">
                  <div className="hidden lg:block mb-4">
                    <div role="tablist" className="text-muted-foreground h-9 items-center justify-center w-full bg-muted/30 rounded-none grid p-0 outline-none" style={{ gridTemplateColumns: 'repeat(4, minmax(0px, 1fr))' }}>
                      {steps.map((step, index) => (
                        <button key={step.id} onClick={() => setActiveStep(step.id)} className={`inline-flex flex-1 items-center justify-center gap-1.5 px-2 text-[13px] font-medium whitespace-nowrap relative h-full transition-all duration-200 cursor-pointer rounded-sm border-0 py-2 outline-none ${activeStep === step.id ? 'bg-primary text-primary-foreground shadow-sm font-medium z-10' : 'bg-muted text-muted-foreground hover:bg-muted/80'} ${index !== steps.length - 1 && activeStep !== step.id && activeStep !== step.id + 1 ? 'after:absolute after:right-0 after:top-4 after:bottom-4 after:w-[1px] after:bg-border/30' : ''}`}>
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="font-medium">{step.title}</span>
                            <span className={`text-[9px] ${activeStep === step.id ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>{step.subtitle}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-0 space-y-4">
                    <div className="p-0 sm:px-6">
                      {activeStep === 1 && (
                        <div className="space-y-8 p-4 sm:p-6 animate-in fade-in duration-300">
                          <div className="space-y-6">
                            <h3 className="text-lg font-medium">Match Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Date</label>
                                <button className="inline-flex items-center gap-2 rounded-md text-sm border bg-background hover:bg-accent h-9 px-4 w-full justify-between font-normal cursor-pointer shadow-none">
                                  Select fixture date <ChevronDown className="h-4 w-4 opacity-50" />
                                </button>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Time</label>
                                <input className="border-input flex h-9 min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm outline-none w-full shadow-none" type="time" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6 pt-4 border-t border-border/40">
                            <h3 className="text-lg font-medium">Teachers Attending</h3>
                            <div className="space-y-4 bg-muted/20 p-6 rounded-lg border border-border/30">
                              <p className="text-sm font-medium text-primary italic">Auto display Coaches associated with the team</p>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {teamCoaches.map(name => (
                                  <label key={name} className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                                    <span className="text-sm">{name}</span>
                                  </label>
                                ))}
                              </div>
                              <div className="space-y-4 pt-2">
                                <label className="text-sm font-medium">+ Other (drop list to all staff)</label>
                                <div className="flex gap-2">
                                  <select className="flex h-9 flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm outline-none">
                                    <option value="">Select additional staff...</option>
                                    {otherStaff.map(s => <option key={s}>{s}</option>)}
                                  </select>
                                  <button className="h-9 px-3 border rounded-md hover:bg-accent"><Plus size={14} /></button>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Leaving school From time:</label>
                                <input type="time" className="border-input h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm" defaultValue="08:30" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Returning Time</label>
                                <input type="time" className="border-input h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm" defaultValue="14:30" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeStep > 1 && (
                        <div className="p-20 text-center space-y-4 border rounded-xl bg-muted/10 m-6">
                          <h3 className="text-xl font-semibold">{steps[activeStep - 1].title}</h3>
                          <p className="text-muted-foreground italic">Configuration area for {steps[activeStep - 1].title}...</p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between mt-4 px-6 pb-6">
                      <button onClick={() => activeStep > 1 && setActiveStep(activeStep - 1)} className={`h-9 px-4 border rounded-md text-sm font-medium hover:bg-muted ${activeStep === 1 ? 'invisible' : 'visible'}`}>Previous</button>
                      <button onClick={() => activeStep < steps.length && setActiveStep(activeStep + 1)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-9 px-4 rounded-md text-sm font-medium hover:bg-primary/90">
                        {steps[activeStep]?.title || 'Finish'} <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: Supervision and Substitution */}
          {currentModule === 'sns' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative mb-6">
                <div className="relative space-y-2">
                  <div className="flex items-center justify-between gap-4 pt-3">
                    <h1 className="text-2xl font-bold tracking-tight">
                      <span className="bg-primary bg-clip-text text-transparent">Supervision and Substitution Dashboard</span>
                    </h1>
                  </div>
                  <nav aria-label="Breadcrumbs" className="flex items-center text-sm border-b border-border/40 pb-2">
                    <House className="h-3.5 w-3.5 text-muted-foreground" />
                    <ChevronRight className="h-3.5 w-3.5 mx-1 text-muted-foreground/40" />
                    <span className="text-foreground font-medium uppercase tracking-tight">Supervision & Substitution List</span>
                  </nav>
                </div>
              </div>

              <div className="bg-card text-card-foreground rounded-xl border border-border/60 shadow-none overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-border/40 pb-4">
                      <h2 className="text-xl font-bold text-primary">Supervision and Substitution List</h2>
                      <div className="flex items-center gap-6 text-sm font-semibold">
                        <button onClick={() => setSnsFilter('approved')} className={`transition-colors pb-1 ${snsFilter === 'approved' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}>Approved</button>
                        <button onClick={() => setSnsFilter('pending')} className={`transition-colors pb-1 ${snsFilter === 'pending' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}>Pending Approval</button>
                        <button onClick={() => setSnsFilter('all')} className={`transition-colors pb-1 ${snsFilter === 'all' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}>All Requests</button>
                      </div>
                    </div>

                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Search by staff, fixture or date..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-9 w-full pl-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm outline-none transition-colors focus-visible:ring-1 focus-visible:ring-ring hover:bg-muted/50"
                      />
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-primary font-bold text-sm">
                            <th className="pb-4 pr-4">Date</th>
                            <th className="pb-4 px-4">From</th>
                            <th className="pb-4 px-4">To</th>
                            <th className="pb-4 px-4">Staff</th>
                            <th className="pb-4 px-4">Fixture</th>
                            <th className="pb-4 px-4">Approve</th>
                            <th className="pb-4 pl-4">Supervision Done</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20">
                          {snsData.filter(item => 
                            item.staff.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.fixture.toLowerCase().includes(searchQuery.toLowerCase())
                          ).map((row, idx) => (
                            <tr key={idx} className="group hover:bg-muted/30 transition-colors text-sm">
                              <td className="py-4 pr-4 text-primary font-medium">{row.date}</td>
                              <td className="py-4 px-4 text-primary">{row.from}</td>
                              <td className="py-4 px-4 text-primary">{row.to}</td>
                              <td className="py-4 px-4 text-primary font-semibold">{row.staff}</td>
                              <td className="py-4 px-4 text-primary">{row.fixture}</td>
                              <td className="py-4 px-4">
                                <span className="text-[10px] font-bold border border-primary/40 px-2 py-0.5 rounded text-primary bg-primary/5 uppercase">{row.approve}</span>
                              </td>
                              <td className="py-4 pl-4">
                                {row.snsDone === "YES" ? (
                                  <span className="text-primary font-bold inline-flex items-center gap-1"><CheckCircle2 size={14} /> YES</span>
                                ) : (
                                  <span className="text-muted-foreground font-medium inline-flex items-center gap-1"><Clock4 size={14} /> No</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
