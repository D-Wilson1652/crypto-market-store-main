provider "aws" {
  region = "eu-north-1"
}

resource "aws_instance" "existing_instance" {
  ami           = "ami-0d18135fcc12b95f4"
  instance_type = "t3.medium"

  tags = {
    Name = "ReactApp"
  }
}
