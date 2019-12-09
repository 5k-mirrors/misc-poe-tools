require 'file-tail'
require 'rb-notifu'

File.open("C:/Program Files (x86)/Grinding Gear Games/Path of Exile/logs/Client.txt") do |log|
  log.extend(File::Tail)

  log.backward(1).tail do |line|
    Notifu::show :message => "NEXT ROOM", :type => :warn, :time => 5 do; end if line=~/The room grows still and quiet/
    Notifu::show :message => "DONE", :type => :warn, :time => 5 do; end if line=~/The oppressive atmosphere slowly dissipates/
    Notifu::show :message => "SOMEONE LEFT", :type => :warn, :time => 5 do; end if line=~/has left the area/
  end
end
