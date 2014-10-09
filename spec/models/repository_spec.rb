require 'rails_helper'

describe Repository do

  it { should have_many(:collaborations) }
  it { should have_many(:users) }
  it { should belong_to(:category)}

end
