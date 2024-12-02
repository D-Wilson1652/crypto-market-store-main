output "instance_ip" {
  description = "13.48.61.149"
  value = aws_instance.existing_instance.public_ip
}