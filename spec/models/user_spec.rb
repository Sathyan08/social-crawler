require 'rails_helper'

describe User do

  it { should have_many(:collaborations) }
  it { should have_many(:repositories) }
  it { should have_many(:reviews_written) }
  it { should have_many(:reviews_received) }
  it { should have_many(:reviewers) }
  it { should have_many(:reviewees) }

end
