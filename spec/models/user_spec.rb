require 'rails_helper'

describe User do

  it { should have_many(:collaborations) }
  it { should have_many(:repositories) }

end
